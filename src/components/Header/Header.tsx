import { getHeaderRes } from '@/libs/contentstack/helpers'

export default async function Header() {
  const data = await getHeaderRes()
  console.log('Header: ', data)

  return <header className="text-balance px-4 font-bold">B/S/H/</header>
}
