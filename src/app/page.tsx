import React from 'react'
import { redirect } from 'next/navigation'

type Props = {
  item: any
}

// テストのためにいれたInterfaceです。実際はいりません。
interface ITestApiResponse {
  error: boolean
  category: string
  type: string
  setup: string
  delivery: string
  flags: {
    nsfw: boolean
    religious: boolean
    political: boolean
    racist: boolean
    sexist: boolean
    explicit: boolean
  }
  id: number
  safe: boolean
  lang: string
}

const getData = async (): Promise<ITestApiResponse> => {
  /**  テストのため、OpenAPIの chucknorris.ioを利用しています。
    https://api.chucknorris.io/
  */
  const res = await fetch('https://v2.jokeapi.dev/joke/Any?safe-mode', {
    method: 'GET',
  })

  if (res.ok) {
    return res.json()
  }
  redirect('/error') // Data Fetchに失敗したときのRedirection方法
}

const Page = async ({ item }: Props) => {
  const data = await getData()

  return (
    <>
      <h1>テストページのTOPRoute</h1>
      <div className='chuck-norise-wrap'>
        <h2>{data.category}に関してのJOKE</h2>
        <div className='joke'>
          <p>{data.setup}</p>
        </div>
        <div className='joke anwser'>
          <p>{data.delivery}</p>
        </div>
      </div>
    </>
  )
}

export default Page
