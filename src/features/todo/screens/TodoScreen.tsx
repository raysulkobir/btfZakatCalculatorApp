import React from 'react';
import { SafeAreaView, View, Text, Pressable } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import TodoInput from '../components/TodoInput';
import TodoItem from '../components/TodoItem';
import { addTodo, toggleTodo, removeTodo, clearDone, setFilter } from '../state/todoSlice';
import type { RootState } from '@/store';

export default function TodoScreen() {
    const dispatch = useDispatch();
    const [text, setText] = React.useState('');

    const { items, filter } = useSelector((s: RootState) => s.todo);

    const visible = items.filter(t =>
        filter === 'active' ? !t.done : filter === 'done' ? t.done : true
    );

    const submit = () => {
        if (text.trim()) {
            dispatch(addTodo(text));
            setText('');
        }
    };

    return (
        <SafeAreaView style={{ flex: 1, padding: 16, gap: 16 }}>
            <TodoInput value={text} onChange={setText} onSubmit={submit} />

            <View style={{ flexDirection: 'row', gap: 12 }}>
                {(['all', 'active', 'done'] as const).map(f => (
                    <Pressable key={f} onPress={() => dispatch(setFilter(f))}>
                        <Text style={{ fontWeight: filter === f ? '700' : '400' }}>
                            {f.toUpperCase()}
                        </Text>
                    </Pressable>
                ))}
                <View style={{ flex: 1 }} />
                <Pressable onPress={() => dispatch(clearDone())}>
                    <Text>Clear Done</Text>
                </Pressable>
            </View>

            <View style={{ gap: 4 }}>
                {visible.map(t => (
                    <TodoItem
                        key={t.id}
                        title={t.title}
                        done={t.done}
                        onToggle={() => dispatch(toggleTodo(t.id))}
                        onDelete={() => dispatch(removeTodo(t.id))}
                    />
                ))}
                {visible.length === 0 && (
                    <Text style={{ opacity: 0.6, marginTop: 16 }}>No todos yet.</Text>
                )}
            </View>
        </SafeAreaView>
    );
}
