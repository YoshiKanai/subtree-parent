interface CopyProps {
  type: 'solid' | 'outline'
  body: string
}

export default function Copy({ type, body }: CopyProps) {
  return <div className={`${type} mt-10`} dangerouslySetInnerHTML={{ __html: body }}></div>
}
