import { Client } from '@notionhq/client'
const notion = new Client({
  auth: "secret_UckZjDKip9cbN4RtY3iSwChUf40JY0CBsFkZ9oXDXFB"
})
const estoqueNatura = "f2b1ef0a33504f90b440059c55da00b3"

export async function getDatabase(){
    const response = await notion.databases.query({
      database_id: estoqueNatura
    })

    return response.results.map((page) => {
      return {
        qt: page.properties.qt.number,
        sexo: page.properties.sexo.select.name,
        volume: page.properties.volume.rich_text[0].plain_text,
        nome: page.properties.nome.rich_text[0].plain_text,
        aroma: page.properties.aroma.rich_text[0].plain_text,
        tipo: page.properties.tipo.select.name,
        aplicacao: page.properties.aplicacao.select.name,
        linha: page.properties.linha.title[0].plain_text,
        preco: page.properties.preco.rich_text[0].plain_text,
      }
    })
  }