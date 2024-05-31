import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";
import homePict from './homePict.svg';

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.textHome}>
        <div>
          <h1>Welcome To Your Personal</h1>
          <h1>To Do Page</h1>
        </div>
        <Link className={styles.link} href={'/create'}>Lets Get Started !</Link>
      </div>
      <div>
        <Image src={homePict} alt="Home Picture" width={500} height={500}/>
      </div>
    </main>
  );
}
