import { View, Text, TextInput, TouchableOpacity, FlatList, Alert } from 'react-native'
import { styles } from './styles'
import { Task } from '../../components/Task'
import React, { useState } from 'react';

export function Home() {

    const [tasks, setTasks] = useState<string[]>([])
    const [taskName, setTaskName] = useState('')

    function handleTaskAdd() {
        if (tasks.includes(taskName)) {
            return Alert.alert("Tarefa já existe")
        }
        setTasks(prevState => [...prevState, taskName])
        setTaskName('')
    }

    function handleRemoveTask(name: string) {
        Alert.alert("Remover", "Deseja remover esta tarefa?", [
            {
                text: 'Sim',
                onPress: () => setTasks(prevState => prevState.filter(task => task !== name))
            },
            {
                text: 'Não',
                style: 'cancel'
            }
        ])
    }

    return (
        <View style={styles.container}>
            <Text style={styles.title}>
                To-Do List 📝
            </Text>

            <Text style={styles.subtitle}>
                Bem vindo(a) ao nosso app
            </Text>

            <View style={styles.form}>
                <TextInput
                    style={styles.input}
                    placeholder='Digite a sua tarefa aqui'
                    placeholderTextColor={'#006F6E'}
                    onChangeText={setTaskName}
                    value={taskName}
                />

                <TouchableOpacity style={styles.button} onPress={handleTaskAdd}>
                    <Text style={styles.buttonText}>+</Text>
                </TouchableOpacity>
            </View>

            <FlatList
                data={tasks}
                keyExtractor={item => item}
                renderItem={({ item }) => (
                    <Task
                        key={item}
                        nameTask={item}
                        onRemove={() => handleRemoveTask(item)}
                    />
                )}
                showsVerticalScrollIndicator={false}
                ListEmptyComponent={() => (
                    <Text style={styles.emptyList}>
                        Sem tarefas por enquanto
                    </Text>
                )}
            />

        </View>
    );
}