import React from 'react';
import { TextInput, Button, Grid, Notification } from '@mantine/core';
import { useField } from '@mantine/form';

interface LoginFormProps {
    onCreateGame: (username: string) => void;
    onJoinGame: (username: string, gameCode: string) => void;
    error: string | null;
}

export const LoginForm: React.FC<LoginFormProps> = ({ onCreateGame, onJoinGame, error }) => {
    const username = useField({
        initialValue: "",
        validate: (value) =>
            (value.trim().length < 2 ? "Username is too short (minimum 2 characters)" : null) ||
            (value.trim().length >= 15 ? "Username is too long (max 15 characters)" : null),
    });

    const gameCode = useField({
        initialValue: "",
        onValueChange: (value) => gameCode.setValue(value.toUpperCase()),
        validate: (value) => (value.trim().length != 5 ? "Code is not 5 characters long" : null),
    });

    const handleCreateGame = async () => {
        const userNameValidation = await username.validate();
        if (userNameValidation === null) {
            onCreateGame(username.getValue());
        }
    };

    const handleJoinGame = async () => {
        const [gameCodeValidation, userNameValidation] = await Promise.all([
            gameCode.validate(),
            username.validate()
        ]);

        if (gameCodeValidation === null && userNameValidation === null) {
            onJoinGame(username.getValue(), gameCode.getValue());
        }
    };

    return (
        <>
            {error && (
                <Notification radius="sm" withCloseButton>
                    {error}
                </Notification>
            )}
            <p style={{ textAlign: "left" }}>Username</p>
            <TextInput {...username.getInputProps()} placeholder="Enter your username" mb="sm" />
            <Grid>
                <Grid.Col span={6}>
                    <h3>Create a game?</h3>
                    <Button onClick={handleCreateGame}>Create game</Button>
                </Grid.Col>
                <Grid.Col span={6}>
                    <h3>Or join one?</h3>
                    <TextInput {...gameCode.getInputProps()} placeholder="Enter the game code" mb="sm" maxLength={5} />
                    <Button onClick={handleJoinGame}>Join game</Button>
                </Grid.Col>
            </Grid>
        </>
    );
};