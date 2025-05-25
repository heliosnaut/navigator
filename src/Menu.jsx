import { useState, useEffect, } from 'react';
import { Avatar, Typography, Divider, Flex } from 'antd'
import styled from './utils/styled'

const { Text } = Typography
const boxWidth = 100
export default function Menu({ envStateArr }) {
  const [env,] = envStateArr;
  const [sensitive, setSensitive] = useState(true)
  const listNasData = [
    {
      url: '5000',
      name: 'Synology',
      src: 'dsm.png'
    },
    {
      url: '5000/?launchApp=SYNO.Foto.AppInstance',
      name: 'Synology Photos',
      src: 'photos.png',
    },
    {
      url: '5000/?launchApp=SYNO.SDS.AudioStation.Application',
      name: 'Audio Station',
      src: 'audio.png',
    },
    {
      url: '5000/?launchApp=SYNO.SDS.DownloadStation.Application',
      name: 'Download Station',
      src: 'download.png',
    },
    {
      url: '5000/?launchApp=SYNO.SDS.Drive.Application',
      name: 'Synology Drive',
      src: 'drive.png',
    },
    {
      url: '5000/sunny-note/',
      name: 'Note Station',
      src: 'note.png'
    },
    {
      url: '5244',
      name: 'Alist',
      src: 'alist.png'
    },
    {
      url: '5700',
      name: 'Qinglong',
      src: 'qinglong.png'
    },
    {
      url: '8000',
      name: 'Musicn: MP3',
      src: 'musicn.png'
    },
    {
      url: '8003',
      name: 'Widget Collection',
      src: 'collection.png'
    },
    {
      url: '8004/menu.md',
      name: 'Technology Note',
      src: 'menu.jpg'
    },
    {
      url: '8005',
      https: true,
      name: 'QRcode Scan',
      src: 'qrcode.png'
    },
    {
      url: '8081',
      name: 'Clash Dashboard',
      src: 'clash.png'
    },
    {
      url: '8083',
      name: 'Calibre-web',
      src: 'calibre-web.png'
    },
    {
      url: '2342',
      name: 'PhotoPrism',
      src: 'photoprism.svg',
      sensitive,
    },
    {
      url: '5000/?launchApp=SYNO.SDS.VideoStation.AppInstance',
      name: 'Video Station',
      src: 'video.png',
      sensitive,
    },
  ]

  const listData = [
    {
      url: 'https://github.com/heliosnaut',
      name: 'Github',
      src: 'gitHub.svg',
    },
    {
      url: 'https://drive.google.com/drive/home',
      name: 'GoogleDrive',
      src: 'google.png',
    },
    {
      url: 'https://pan.xunlei.com',
      name: 'XunleiDrive',
      src: 'xunlei.png',
    },
    {
      url: 'https://pan.quark.cn',
      name: 'QuarkDrive',
      src: 'quark.png',
    },
  ]

  const Div = styled.div({
    // display: "inline-block",
    // width: "calc(100% / 10)",
    // lineHeight: "30px",
    // marginBottom: "20px",
    // paddingTop: "20px",
    textAlign: "center",
    borderRadius: "6px",
    "&": `hover{
      cursor: pointer;
      opacity: .8;
      background-color: rgba(0, 0, 0, .1);
      transition: all .5s;
    }`
  })

  useEffect(() => {
    if (window.location.search.includes('all')) setSensitive(false)
  }, [])

  return <>
    <Flex wrap="wrap" gap="large" style={{ margin: '20px' }}>
      {
        listNasData.map(({ url, https = false, src, name, sensitive = false }, index) => <Div
          style={{ visibility: sensitive ? 'hidden' : 'visible' }}
          onClick={() => {
            const protocol = `http${https ? 's' : ''}`
            let origin = `${protocol}://192.168.1.185:`

            if (env === 2) origin = `${protocol}://100.86.149.153:`
            window.open(`${origin}${url}`)
          }}
          data-url={url}
          key={index} >
          <Avatar size={boxWidth} shape="square" src={src} /><br />
          <Text style={{ color: '#fff', width: `${boxWidth}px`, display: 'inline-block' }}>{name}</Text>
        </Div>)
      }
    </Flex >

    <Divider orientation="left" style={{ color: 'blue', backgroundColor: '#ff0', }}>It's NAS up there.⬆⬆⬆</Divider>

    <Flex wrap="wrap" gap="large" style={{ margin: '20px' }}>
      {
        listData.map(({ url, src, name, }, index) => <Div
          onClick={() => window.open(url)}
          data-url={url}
          key={index} >
          <Avatar size={100} shape="square" src={src} /><br />
          <Text style={{ color: '#fff', width: `${boxWidth}px`, display: 'inline-block' }}>{name}</Text>
        </Div>)
      }
    </Flex >
  </>

}