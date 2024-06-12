'use client'

interface ButtonProps {
  type: 'solid' | 'outline'
  position: 'left' | 'center' | 'right' | 'center-left'
  label: string
  action: string
}

const typeClasses = {
  solid:
    'bg-slate text-white border-slate hover:bg-transparent hover:text-slate active:bg-orange active:text-slate',
  outline:
    'bg-transparent text-slate border-slate hover:bg-slate hover:text-white active:bg-slate active:text-white',
  animate: 'transition-all duration-300 ease-in-out',
}

const positionClasses = {
  left: 'justify-start items-center',
  center: 'justify-center items-center',
  right: 'justify-end items-center',
  'center-left': 'justify-center md:justify-start items-center',
}

export default function Button({ type, position, label, action }: ButtonProps) {
  const clickHandler = (e: React.MouseEvent): void => {
    console.log(type, action, e)
  }

  const conditionalStyles = ''
  return (
    <div className={`flex ${positionClasses?.[position] || ''}`}>
      <button
        className={`rounded-4xl border px-7 py-3 uppercase ${typeClasses?.[type] || ''} ${typeClasses?.['animate'] || ''}`}
        onClick={clickHandler}
      >
        <span className="inline-block pb-[1px]">{label}</span>
      </button>
    </div>
  )
}
