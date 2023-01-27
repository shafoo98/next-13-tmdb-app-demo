import Link from 'next/link'
import Image from 'next/image'

export default function Movie({ title, id, release_date, poster_path }) {
  const imagePath = 'https://image.tmdb.org/t/p/original'
  return (
    <div>
      <Link href={`/${id}`}>
        <Image
          src={imagePath + poster_path}
          width={500}
          height={500}
          alt={title}
        />
      </Link>
      <h1>{title}</h1>
      <h2>{release_date}</h2>
    </div>
  )
}
