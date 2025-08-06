"use client";

type LoadingAnnouncerProps = {
  isLoading: boolean;
  loadingMessage?: string;
  completedMessage?: string;
};

export default function LoadingAnnouncer({
  isLoading,
  loadingMessage = "Loading content",
  completedMessage = "Content loaded",
}: LoadingAnnouncerProps) {
  return (
    <div
      aria-live="polite"
      aria-atomic="true"
      className="sr-only"
      role="status"
    >
      {isLoading ? loadingMessage : completedMessage}
    </div>
  );
}
