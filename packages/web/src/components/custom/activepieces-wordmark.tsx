import { cn } from '@/lib/utils';

const ActivepiecesWordmark = ({ className }: { className?: string }) => (
  <div className={cn('flex h-full items-center gap-2.5 text-gray-11', className)}>
    <img src="/logo.svg" alt="" aria-hidden="true" className="h-[90%] w-auto" />
    <span
      style={{
        fontSize: '22px',
        fontWeight: 600,
        letterSpacing: '-0.02em',
        lineHeight: 1,
      }}
    >
      Synkra <span style={{ fontWeight: 400 }}>Flow</span>
    </span>
  </div>
);
ActivepiecesWordmark.displayName = 'ActivepiecesWordmark';
export { ActivepiecesWordmark };
