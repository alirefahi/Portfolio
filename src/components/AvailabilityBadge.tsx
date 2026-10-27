type Props = { variant?: 'default' | 'compact' }

export default function AvailabilityBadge({ variant = 'default' }: Props) {
  return (
    <span className={`availability-badge${variant === 'compact' ? ' availability-badge--compact' : ''}`}>
      <span className="availability-badge__dot" aria-hidden="true" />
      {variant === 'compact' ? 'Open to work' : 'Open to new opportunities'}
    </span>
  )
}
