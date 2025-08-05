type MainContainerProps = {
  children: React.ReactNode;
  className?: string;
};

export default function MainContainer({
  children,
  className = "",
}: MainContainerProps) {
  return (
    <main className="px-6">
      <div className={`container mx-auto ${className}`}>{children}</div>
    </main>
  );
}
