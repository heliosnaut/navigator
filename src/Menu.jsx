import {Avatar, Typography, Divider,} from 'antd'
import styled from './utils/styled'

const { Text } = Typography;
export default function Menu ({ envStateArr }) {
  const [env,] = envStateArr;
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
      url: '2342',
      name: 'PhotoPrism',
      src: 'photoprism.svg'
    },
    {
      url: '5000/?launchApp=SYNO.SDS.VideoStation.AppInstance',
      name: 'Video Station',
      src: 'video.png',
    },
    {
      url: '8096',
      name: 'Jellyfin',
      src: 'jellyfin.png'
    },
    {
      url: '5000/?launchApp=SYNO.SDS.AudioStation.Application',
      name: 'Audio Station',
      src: 'audio.png',
    },
    {
      url: '5000/sunny-note/',
      name: 'Note Station',
      src: 'note.png'
    },
    {
      url: '8083',
      name: 'Calibre-web',
      src: 'calibre-web.png'
    },
    {
      url: '5244',
      name: 'Alist',
      src: 'alist.png'
    },
    {
      url: '8887/menu.md',
      name: 'Technology Note',
      src: 'menu.png'
    },
    {
      url: '8888',
      name: 'SendMail & 2Base64',
      src: 'sendmail.png'
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
      url: '5700',
      name: 'QingLong',
      src: 'qinglong.png'
    },
  ]

  const listData = [
    {
      url:'https://github.com/heliosnaut',
      name:'Github',
      src:'gitHub.svg',
    },
  ]

  const LI = styled.li({
    display: "inline-block",
    width: "calc(100% / 10)",
    lineHeight: "40px",
    marginBottom: "20px",
    paddingTop: "20px",
    textAlign: "center",
    borderRadius: "6px",
    cursor: "pointer",
    "&": `hover{
      background-color: rgba(0, 0, 0, .1);
    }`
  })

  return <>
    <ul>
    {
      listNasData.map(({ url, src, name, }, index) => <LI
        onClick={() => {
          if (env === 1) origin = 'http://192.168.1.185:'
          if (env === 2) origin = 'http://100.86.149.153:'

          window.open(`${origin}${url}`)
        }}
        data-url={url}
        key={index} >
        <Avatar size={100} shape="square" src={src} /><br />
        <Text style={{ color: '#fff' }}>{name}</Text>
      </LI>)
    }
  </ul>

  <Divider orientation="left" style={{color:'blue', backgroundColor:'#ff0', }}>It's NAS up there.⬆⬆⬆</Divider>
  
  <ul>
    {
      listData.map(({ url, src, name, }, index) => <LI
        onClick={() => window.open(url) }
        data-url={url}
        key={index} >
        <Avatar size={100} shape="square" src={src} /><br />
        <Text style={{ color: '#fff' }}>{name}</Text>
      </LI>)
    }
  </ul>

  </> 

}