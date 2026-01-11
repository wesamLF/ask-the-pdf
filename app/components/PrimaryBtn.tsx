import Link from 'next/link'

const PrimaryBtn = ({ text = "home", href = '/' }: { text: string, href: string }) => {
    return (
        <Link href={href}
        className='px-4 py-2 bg-primary text-light rounded-lg'
        >{text}</Link>
    )
}

export default PrimaryBtn