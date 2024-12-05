import styles from './page.module.css';
import Image from 'next/image';

import NewsList from '@/app/_components/NewsList';
import ButtonLink from '@/app/_components/ButtonLink';
import { News } from '@/app/_libs/microcms';

const data: {
	contents: News[]
} = {
	contents: [
		{
			id: "1",
			title: "テクノロジーの力で世界を変える",
			category: {
				name: "更新情報"
			},
			publishedAt: "2024/11/29",
			createdAt: "2024/11/29",
		},
		{
			id: "2",
			title: "テクノロジーの力で世界を変える",
			category: {
				name: "更新情報"
			},
			publishedAt: "2024/11/29",
			createdAt: "2024/11/29",
		},
		{
			id: "3",
			title: "テクノロジーの力で世界を変える",
			category: {
				name: "更新情報"
			},
			publishedAt: "2024/11/29",
			createdAt: "2024/11/29",
		},
	]
}

export default function Home() {
	const sliceData = data.contents.slice(0, 2);
	// const sliceData: News[] = [];
	return (
		<>
			<section className={styles.top}>
				<div>
					<h1 className={styles.title}>テクノロジーの力で世界を変える</h1>
					<p className={styles.description}>私たちは市場をリードしているグローバルテックカンパニーです。</p>
				</div>
				<Image className={styles.bgimg} src="/img-mv.jpg" alt="" width={4000} height={1200} />
			</section>

			<section className={styles.news}>
				<h2 className={styles.newsTitle}>News</h2>
				<NewsList news={sliceData} />
				<div className={styles.newsLink}>
					<ButtonLink href="/news">もっとみる</ButtonLink>
				</div>

			</section >
		</>
	)
}