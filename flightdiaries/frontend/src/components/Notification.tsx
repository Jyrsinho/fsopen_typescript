interface NotificationProps {
    notification: string | null;
}

const Notification = ({notification}: NotificationProps) => {
    if (!notification) {
        return null
    }

    return (
        <p style={{
            background: 'black',
            color:'red',
        }}>{notification}</p>
    )
}

export default Notification