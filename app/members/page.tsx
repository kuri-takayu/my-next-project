import Image from 'next/image';
import styles from './page.module.css';

const data = {
  contents: [
    {
      id: '1',
      image: {
        url: '/img-member1.jpg',
        width: 240,
        height: 240,
      },
      name: 'デイビッド・チャン',
      position: 'CEO',
      profile: 'デイビッド・チャンは、SIMPLE株式会社のCEOです。彼は、IT業界での豊富な経験を持ち、多くのプロジェクトを成功に導いてきました。デイビッド・チャンは、技術革新とビジネス成長の両面で重要な役割を果たしています。',
    },
    {
      id: '2',
      image: {
        url: '/img-member2.jpg',
        width: 240,
        height: 240,
      },
      name: 'エミリー・サンダース',
      position: 'COO',
      profile: 'マイケル・リーは、SIMPLE株式会社のCTOです。彼は、システム開発とデータ分析の専門家で、複雑な問題を解決するための革新的なアプローチを提供しています。',
    },
    {
      id: '3',
      image: {
        url: '/img-member3.jpg',
        width: 240,
        height: 240,
      },
      name: 'ジョン・ウィルソン',
      position: 'CTO',
      profile: 'マイケル・リーは、SIMPLE株式会社のCTOです。彼は、システム開発とデータ分析の専門家で、複雑な問題を解決するための革新的なアプローチを提供しています。',
    },
  ],
}

export default function Page() {
  return (
    <div className={styles.container}>
      {data.contents.length === 0 ? (
        <p className={styles.empty}>メンバーが登録されていません。</p>
      ) : (
        <ul>
          {data.contents.map((member) => (
            <li key={member.id} className={styles.list}>
              <Image
                src={member.image.url}
                alt=""
                width={member.image.width}
                height={member.image.height}
              />
              <dl>
                <dt className={styles.name}>{member.name}</dt>
                <dd className={styles.position}>{member.position}</dd>
                <dd className={styles.profile}>{member.profile}</dd>
              </dl>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
