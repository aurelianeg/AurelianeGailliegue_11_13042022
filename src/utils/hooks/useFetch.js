import { useState, useEffect } from 'react'

export function useFetch(url) {
   const [data, setData] = useState([])
   const [isDataLoaded, setDataLoaded] = useState(false)
   const [error, setError] = useState(false)
   const [isMultipleThree, setMultipleThree] = useState(false)

   useEffect(() => {
      async function getData() {
         setDataLoaded(true)
         try {
            const response = await fetch(url)
            const data = await response.json()
            setData(data)
            if (data.length % 3 === 0) {
               setMultipleThree(true)
            }
         } catch (error) {
            console.log('Error at fetch: ', error)
            setError(true)
         } finally {
            setDataLoaded(false)
         }
      }
      getData()
   }, [url])

   return { data, isDataLoaded, error, isMultipleThree }
}