import React from 'react'
import Layout from '../../components/MyLayout'
import Markdown from 'react-markdown';
import {useRouter} from "next/router"

export default ()=>{
  const router= useRouter()
  return (
    <Layout>
      <h1>{router.query.id}</h1>
      <div className={"markdown"}>
        <Markdown
        source={`
          This is our blog post.
          Yes. We can have a [link](/link).
          And we can have a title as well.

          ### This is a title

          And here's the content.
        `}
        />
      </div>
      <style jsx global>{`
        .markdown{
          font-family: 'Arial';
        }

        .markdown{
          text-decoration: none;
          color: blue;
        }

        .markdown a:hover{
          opacity: 0.6;
        }

        .markdown h3{
          margin: 0;
          padding: 0;
          text-transform: uppercase;
        }
        
        `}</style>
    </Layout>
  )
}
