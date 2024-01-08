
import {useState} from 'react'
import ChooseBox from './ChooseBox'
import Menu from './Menu'

export default function App() {
  const EnvSign = Number(localStorage.getItem("EnvSign"))
  const [env, setEnv] = useState(EnvSign || 1)

  return <>
    <ChooseBox envStateArr={[env, setEnv]} />
    <Menu envStateArr={[env, setEnv]} />
  </>
}
