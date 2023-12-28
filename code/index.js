const { Radio, Avatar, Typography, } = antd;
const { Text } = Typography;

const ChooseBox = ({ envStateArr }) => {
  const [env, setEnv,] = envStateArr;

  return <Radio.Group value={env} buttonStyle="solid" onChange={e => {
    const { value } = e.target;

    localStorage.setItem("EnvSign", value);
    setEnv(value);
  }} style={{ margin: '20px' }}>
    <Radio.Button value={1}>Local</Radio.Button>
    <Radio.Button value={2}>Web</Radio.Button>
  </Radio.Group>
}

const Main = ({ envStateArr }) => {
  const [env,] = envStateArr;
  const listData = [
    {
      url: '2342',
      name: 'PhotoPrism',
      src: './img/photoprism.svg'
    },
    {
      url: '5000',
      name: '群晖',
      src: './img/dsm.png'
    },
    {
      url: '5700',
      name: '青龙面板',
      src: './img/qinglong.png'
    },
    {
      url: '5244',
      name: 'Alist',
      src: './img/alist.png'
    },
    {
      url: '8083',
      name: 'Calibre-web',
      src: './img/calibre-web.png'
    },
    {
      url: '8096',
      name: 'Jellyfin',
      src: './img/jellyfin.png'
    },
    {
      url: '8887/menu.md',
      name: 'Menu',
      src: './img/menu.png'
    },
    {
      url: '8888',
      name: 'SendMail',
      src: './img/sendmail.png'
    },
  ]

  return <ul>
    {
      listData.map(({ url, src, name, }, index) => <li
        onClick={() => {
          if (env === 1) origin = 'http://192.168.1.185:'
          if (env === 2) origin = 'http://100.86.149.153:'

          window.open(`${origin}${url}`)
        }}
        data-url={url}
        key={index}>
        <Avatar
          size={100}
          src={src}
        /><br />
        <Text style={{ color: '#fff' }}>{name}</Text>
      </li>)
    }
  </ul>
}

const MyApp = () => {
  const EnvSign = Number(localStorage.getItem("EnvSign"));
  const [env, setEnv] = React.useState(EnvSign || 1);

  return <>
    <ChooseBox envStateArr={[env, setEnv]} />
    <Main envStateArr={[env, setEnv]} />
  </>;
}

const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);

root.render(<MyApp />);