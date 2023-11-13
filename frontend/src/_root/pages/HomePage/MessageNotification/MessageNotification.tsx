// @ts-nocheck

interface MessageNotificationProps {
  icon: HTMLElement;
  message: HTMLElement;
  className: string;
}

const MessageNotification = ({ icon, message, className }) => {
  return (
    <div
      className={`flex items-center w-[270px] p-4 m-4 rounded-xl bg-white ${className}`}
    >
      <div className="p-1">{icon}</div>
      <div className="p-1">{message}</div>
    </div>
  );
};

export default MessageNotification;
