import { GetStaticProps } from 'next'
import Head from 'next/head'
import { prismic } from '../../services/prismic'
import styles from './styles.module.scss'

export default function Posts() {
  return (
    <>
      <Head>
        <title>Posts | Ignews</title>
      </Head>

      <main className={styles.container}>
        <div className={styles.posts}>
          <a href='#'>
            <time>12 de Outubro de 2022</time>
            <strong>Create a Monorepo with Lerna & Yarn Worckspaces</strong>
            <p>In this guide, you will learn how to create a Monorepo to manage multiple packages with a shared build, test, and release process.</p>
          </a>
          <a href='#'>
            <time>12 de Outubro de 2022</time>
            <strong>Create a Monorepo with Lerna & Yarn Worckspaces</strong>
            <p>In this guide, you will learn how to create a Monorepo to manage multiple packages with a shared build, test, and release process.</p>
          </a>
          <a href='#'>
            <time>12 de Outubro de 2022</time>
            <strong>Create a Monorepo with Lerna & Yarn Worckspaces</strong>
            <p>In this guide, you will learn how to create a Monorepo to manage multiple packages with a shared build, test, and release process.</p>
          </a>
        </div>
      </main>
    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const response = await prismic.getAllByType('publication', {
    fetch: ['publication.title', 'publication.content'],
    pageSize: 100
  })

  console.log(response)

  return {
    props: {}
  }
}