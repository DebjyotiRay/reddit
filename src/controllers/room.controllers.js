import Randomstring from 'randomstring';
import prisma from '../config/db.config.js';
import jwt from 'jsonwebtoken';
const JWT_SECRET = process.env.JWT_SECRET;

async function generateRoomCode() {
    let code = Randomstring.generate(10);

    const roomAlreadyPresent = await prisma.room.findUnique({
        where: {
            code
        }
    });

    if (roomAlreadyPresent) {
        return await generateRoomCode();
    }

    return code;
}

async function createRoom(req, res) {
    try {
        const code = await generateRoomCode();

        const room = await prisma.room.create({
            data: {
                ...req.body,
                code,
                users: {
                    connect: [{ id: req.user.id }]
                }
            }
        });

        const user = await prisma.user.update({
            where: {
                id: req.user.id
            },
            data: {
                isCreator: true
            }
        });

        const token = jwt.sign({userID:user.id,userName:user.name,isCreator:true},JWT_SECRET,{expiresIn:'2d'})

        res.status(200).json({
            message: 'Room created successfully',
            code,
            roomId: room.id,
            token:token
        });
    } catch (e) {
        console.log(`Error creating room: ${e}`);
        res.status(500).json({
            error: 'Internal Server Error'
        });
    }
}

async function updateRoom(req, res) {
    try {
        const roomId = parseInt(req.query.roomId);
        const { roomName, roomDescription } = req.body;

        const room = await prisma.room.findUnique({
            where: {
                roomId: roomId
            }
        });

        if (!room) {
            console.log('Error updating room: Room does not exist');
            res.status(400).json({
                error: 'Room does not exist'
            });
            return;
        }

        const updatedRoom = await prisma.room.update({
            where: {
                roomId: Number(roomId)
            },
            data: {
                roomName: roomName,
                roomDescription: roomDescription
            }
        });

        res.status(200).json({
            message: 'Room updated successfully',
            room: updatedRoom
        });
    } catch (e) {
        console.log(`Error updating room: ${e}`);
        res.status(500).json({
            error: 'Internal Server Error'
        });
    }
}

async function removeUserFromRoom(req, res) {
    try {
        const roomId = parseInt(req.query.roomId);
        const userId  = parseInt(req.query.userId);

        const room = await prisma.room.findUnique({
            where: {
                roomId: Number(roomId)
            },
            include: {
                users: true
            }
        });

        if (!room) {
            console.log('Error removing user from room: Room does not exist');
            res.status(400).json({
                error: 'Room does not exist'
            });
            return;
        }

        const user = await prisma.user.findUnique({
            where: {
                id: Number(userId)
            }
        });
        if (!user) {
            console.log('Error removing user from room: User does not exist');
            res.status(400).json({
                error: 'User does not exist'
            });
            return;
        }

        const userInRoom = room.users.find((user) => user.id == Number(userId));
        if (!userInRoom) {
            console.log('Error removing user from room: User is not in the room');
            res.status(400).json({
                error: 'User is not in the room'
            });
            return;
        }

        const updatedRoom = await prisma.room.update({
            where: {
                roomId: Number(roomId)
            },
            data: {
                users: {
                    disconnect: {
                        id: Number(userId)
                    }
                }
            }
        });

        res.status(200).json({
            message: 'User removed from room successfully',
            room: updatedRoom
        });
    } catch (e) {
        console.log(`Error removing user from room: ${e}`);
        res.status(500).json({
            error: 'Internal Server Error'
        });
    }
}

export {removeUserFromRoom, createRoom, updateRoom};