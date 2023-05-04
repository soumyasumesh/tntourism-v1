import { useRouter } from 'next/router';

export default function BlogDetails() {
    const router = useRouter();

    return <h1>Blog detail page {router.query.filename}</h1>
}