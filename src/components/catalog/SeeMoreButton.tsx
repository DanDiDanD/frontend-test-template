import Button from "../ui/Button";

type LoadMoreButtonProps = {
  onLoadMore: () => void;
  loading: boolean;
  canLoadMore: boolean;
};

export default function SeeMoreButton({
  onLoadMore,
  loading,
  canLoadMore,
}: LoadMoreButtonProps) {
  if (!canLoadMore) return null;

  return (
    <Button onClick={onLoadMore} loading={loading}>
      SEE MORE
    </Button>
  );
}
