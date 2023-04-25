import Head from 'next/head';

import Layout from '@components/Layout';
import Section from '@components/Section';
import Container from '@components/Container';
import Map from '@components/Map';
import Button from '@components/Button';

import styles from '@styles/Home.module.scss';

const DEFAULT_CENTER = [42.723301 , -84.481667]

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>Next.js Leaflet Starter</title>
        <meta name="description" content="Create mapping apps with Next.js Leaflet Starter" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Section>
        <Container>
          <h1 className={styles.title}>
            MSU Smash Ultimate Data
          </h1>

          <Map className={styles.homeMap} width="400" height="200" center={DEFAULT_CENTER} zoom={16}>
            {({ TileLayer, Marker, Popup }) => (
              <>
                <TileLayer
                  url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                  attribution="&copy; <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
                />
                <Marker position={DEFAULT_CENTER}>
                  <Popup>
                    A pretty CSS3 popup. <br /> Easily customizable.
                  </Popup>
                </Marker>
              </>
            )}
          </Map>

          <p className={styles.description}>
          <code className={styles.code}>Communication Arts and Science Building - Room 154</code>
          </p>

          <p className={styles.description}>
          <code className={styles.code}>404 Wilson Rd, East Lansing, MI 48824</code>
          </p>

          <p className={styles.view}>
          </p>
        </Container>
      </Section>
    </Layout>
  )
}
