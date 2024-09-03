import Head from 'next/head';
import styles from '../styles/Home.module.css';
import DarkModeToggle from './DarkModeToggle';

function Home() {
  const data = [
    { name: 'Anik Bhai', age: 33 },
    { name: 'Ishmam Bhai', age: 28 },
    { name: 'Joy Bhai', age: 25 },
    { name: 'Nuri Apu', age: 24 },
  ];

  return (
    <div className={styles.container}>
      <Head>
        <title>This App Created To Test Page Routing</title>
      </Head>
   

      <main className={styles.main}>

        <h1>Using App Router</h1>
        <h1>Welcome to Area 51</h1>
        <h2>Soldiers</h2>

        {/* Include the Dark Mode Toggle component */}
        <DarkModeToggle />

        <table className={styles.table}>
          <thead>
            <tr>
              <th>Name</th>
              <th>Age</th>
            </tr>
          </thead>
          <tbody>
            {data.map((user, index) => (
              <tr key={index}>
                <td>{user.name}</td>
                <td>{user.age}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </main>
    </div>
  );
}

export default Home;
