import React, { useEffect, useState } from 'react';
import Chat from '@pages/chat/components/chat/chat.tsx';
import ModelList from '@pages/chat/components/model-list/model-list.tsx';
import PromptInput from '@pages/chat/components/prompt-input/prompt-input.tsx';
import Loading from '@components/loading/loading.tsx';
import ChatOperation from '@pages/chat/components/chat-operations/chat-operation.tsx';
import styles from './chat.module.less';

const useHasHydrated = () => {
    const [hasHydrated, setHasHydrated] = useState<boolean>(false);

    useEffect(() => {
        setTimeout(() => {
            setHasHydrated(true);
        }, 1500);
    }, []);

    return hasHydrated;
};
const ChatPage: React.FC = () => {
    if (!useHasHydrated()) {
        return (
            <Loading />
        );
    }

    return (
        <div className={styles.home}>
            <div className={styles.homeChats}>
                <Chat />
            </div>
            {/* Operation for all sessions */}
            <ChatOperation modelName="gpt-3.5-turbo" />
            {/* Input editor */}
            <PromptInput />
            {/* Model selector */}
            <ModelList />
        </div>
    );
};

export default ChatPage;
