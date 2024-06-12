interface CopyProps {
  type: 'solid' | 'outline'
  body: string
}

export default function Copy({ type, body }: CopyProps) {
  return <div className={`${type}`} dangerouslySetInnerHTML={{ __html: body }}></div>
}
