import { Card, CardContent } from '@/components/ui/card';
import { PieceIconWithPieceName, piecesHooks } from '@/features/pieces';


const getCleanPieceName = (name: string) => {
  if (!name) return '';
  return name
    .split('/')
    .pop()
    ?.replace('piece-', '')
    .replace(/-/g, ' ')
    .replace(/\b\w/g, (c) => c.toUpperCase()) || name;
};

type PieceCardProps = {
  pieceName: string;
};

export const PieceCard = ({ pieceName }: PieceCardProps) => {
  const { summary } = piecesHooks.usePieceSummary({ name: pieceName });

  return (
    <Card>
      <CardContent className="p-2 w-[165px] flex items-center gap-3">
        <PieceIconWithPieceName pieceName={pieceName} size="md" />
        <span className="text-sm font-medium">
          {summary?.displayName ||
            getCleanPieceName(pieceName)}
        </span>
      </CardContent>
    </Card>
  );
};
