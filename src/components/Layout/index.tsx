import Header from "./Header"
import PropTypes from "prop-types"
import MetaConfig, { MetaConfigProps } from "./MetaConfig"
import PullToRefresh from 'react-simple-pull-to-refresh';
import {Pull, Refresh} from "./PullToRefresh/Icon";

type Props = {
  children: React.ReactNode
  metaConfig: MetaConfigProps
  fullWidth?: boolean
}

// 당겨서 새로고침
const handleRefresh = () => new Promise<any>(() => location.reload())

const Layout: React.FC<Props> = ({
  children,
  metaConfig,
  fullWidth = false,
}) => {
  return (
    <div>
      <MetaConfig {...metaConfig} />
      <div className={`wrapper`}>
        {metaConfig.type !== "Paper" && <Header fullWidth={fullWidth} />}
        <PullToRefresh 
          onRefresh={handleRefresh} 
          pullDownThreshold={80}
          resistance={3}
          maxPullDownDistance={90}
          pullingContent={<Pull/>}
          refreshingContent={<Refresh/>}
        >
          <main
            className={`m-auto flex-grow w-full transition-all max-w-7xl px-4 pb-12 ${
              fullWidth && "px-4 md:px-24"
            } ${metaConfig.type === "Paper" && "py-10"} `}
            >
            {children}
          </main>
        </PullToRefresh>
      </div>
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node,
}

export default Layout
