import {Radio} from 'antd'

export default function ChooseBox ({ envStateArr }) {
  const [env, setEnv,] = envStateArr;

  return <Radio.Group
    value={env}
    buttonStyle="solid"
    onChange={e => {
      const { value } = e.target;

      localStorage.setItem("EnvSign", value);
      setEnv(value);
    }} style={{ margin: '20px' }}>
    <Radio.Button value={1}>Local</Radio.Button>
    <Radio.Button value={2}>Web</Radio.Button>
  </Radio.Group>
}
