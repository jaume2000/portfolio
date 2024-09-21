import React from 'react'

type SvgProps = {color: string, width?: string, height?: string}

export const SunIcon: React.FC<SvgProps> = ({color="#000000", height="30px", width="30px"}: SvgProps) => {
  return (
    <svg width={width} height={height} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M12 3V4M12 20V21M4 12H3M6.31412 6.31412L5.5 5.5M17.6859 6.31412L18.5 5.5M6.31412 17.69L5.5 18.5001M17.6859 17.69L18.5 18.5001M21 12H20M16 12C16 14.2091 14.2091 16 12 16C9.79086 16 8 14.2091 8 12C8 9.79086 9.79086 8 12 8C14.2091 8 16 9.79086 16 12Z"/>
    </svg>
  )
}

export const MoonIcon: React.FC<SvgProps> = ({color="#000000", height="30px", width="30px"}: SvgProps) => {
    return (
        <svg width={width} height={height} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fill={color} d="M14.5739 1.11056L13.7826 2.69316C13.7632 2.73186 13.7319 2.76325 13.6932 2.7826L12.1106 3.5739C11.9631 3.64761 11.9631 3.85797 12.1106 3.93167L13.6932 4.72297C13.7319 4.74233 13.7632 4.77371 13.7826 4.81241L14.5739 6.39502C14.6476 6.54243 14.858 6.54243 14.9317 6.39502L15.723 4.81241C15.7423 4.77371 15.7737 4.74232 15.8124 4.72297L17.395 3.93167C17.5424 3.85797 17.5424 3.64761 17.395 3.5739L15.8124 2.7826C15.7737 2.76325 15.7423 2.73186 15.723 2.69316L14.9317 1.11056C14.858 0.963147 14.6476 0.963148 14.5739 1.11056Z"/>
        <path fill={color} d="M19.2419 5.07223L18.4633 7.40815C18.4434 7.46787 18.3965 7.51474 18.3368 7.53464L16.0009 8.31328C15.8185 8.37406 15.8185 8.63198 16.0009 8.69276L18.3368 9.4714C18.3965 9.4913 18.4434 9.53817 18.4633 9.59789L19.2419 11.9338C19.3027 12.1161 19.5606 12.1161 19.6214 11.9338L20.4 9.59789C20.42 9.53817 20.4668 9.4913 20.5265 9.4714L22.8625 8.69276C23.0448 8.63198 23.0448 8.37406 22.8625 8.31328L20.5265 7.53464C20.4668 7.51474 20.42 7.46787 20.4 7.40815L19.6214 5.07223C19.5606 4.88989 19.3027 4.88989 19.2419 5.07223Z"/>
        <path fill={color} fillRule="evenodd" clipRule="evenodd" d="M10.4075 13.6642C13.2348 16.4915 17.6517 16.7363 20.6641 14.3703C20.7014 14.341 20.7385 14.3113 20.7754 14.2812C20.9148 14.1674 21.051 14.0479 21.1837 13.9226C21.2376 13.8718 21.2909 13.8201 21.3436 13.7674C21.8557 13.2552 22.9064 13.5578 22.7517 14.2653C22.6983 14.5098 22.6365 14.7517 22.5667 14.9905C22.5253 15.1321 22.4811 15.2727 22.4341 15.4122C22.4213 15.4502 22.4082 15.4883 22.395 15.5262C20.8977 19.8142 16.7886 23.0003 12 23.0003C5.92487 23.0003 1 18.0754 1 12.0003C1 7.13315 4.29086 2.98258 8.66889 1.54252L8.72248 1.52504C8.8185 1.49401 8.91503 1.46428 9.01205 1.43587C9.26959 1.36046 9.5306 1.29438 9.79466 1.23801C10.5379 1.07934 10.8418 2.19074 10.3043 2.72815C10.251 2.78147 10.1987 2.83539 10.1473 2.88989C10.0456 2.99777 9.94766 3.10794 9.8535 3.22023C9.83286 3.24485 9.8124 3.26957 9.79212 3.29439C7.32966 6.30844 7.54457 10.8012 10.4075 13.6642ZM8.99331 15.0784C11.7248 17.8099 15.6724 18.6299 19.0872 17.4693C17.4281 19.6024 14.85 21.0003 12 21.0003C7.02944 21.0003 3 16.9709 3 12.0003C3 9.09163 4.45653 6.47161 6.66058 4.81846C5.41569 8.27071 6.2174 12.3025 8.99331 15.0784Z"/>
        </svg>
    )
}

export const ConsoleIcon: React.FC<SvgProps> = ({color="#000000", height="30px", width="30px"}: SvgProps) => {
    return (
    <svg fill={color} width={width} height={height} viewBox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg">
    <path d="M0 26.016v-20q0-2.496 1.76-4.256t4.256-1.76h20q2.464 0 4.224 1.76t1.76 4.256v20q0 2.496-1.76 4.224t-4.224 1.76h-20q-2.496 0-4.256-1.76t-1.76-4.224zM4 26.016q0 0.832 0.576 1.408t1.44 0.576h20q0.8 0 1.408-0.576t0.576-1.408v-20q0-0.832-0.576-1.408t-1.408-0.608h-20q-0.832 0-1.44 0.608t-0.576 1.408v20zM8 18.016h2.016v-2.016h-2.016v2.016zM8 10.016h2.016v-2.016h-2.016v2.016zM10.016 16h1.984v-1.984h-1.984v1.984zM10.016 12h1.984v-1.984h-1.984v1.984zM12 14.016h2.016v-2.016h-2.016v2.016zM14.016 18.016h5.984v-2.016h-5.984v2.016z"></path>
    </svg>
    )
}

export const FeatherIcon: React.FC<SvgProps> = ({color="#000000", height="30px", width="30px"}: SvgProps) => {
    return (
        <svg width={width} height={height} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M16 8.00007L2 22.0001M18 15.0001H9M6.6 19.0001H13.3373C13.5818 19.0001 13.7041 19.0001 13.8192 18.9724C13.9213 18.9479 14.0188 18.9075 14.1083 18.8527C14.2092 18.7909 14.2957 18.7044 14.4686 18.5314L19.5 13.5001C19.739 13.2611 19.8584 13.1416 19.9546 13.0358C22.0348 10.7474 22.0348 7.25275 19.9546 4.9643C19.8584 4.85851 19.739 4.73903 19.5 4.50007C19.261 4.26111 19.1416 4.14163 19.0358 4.04547C16.7473 1.96531 13.2527 1.96531 10.9642 4.04547C10.8584 4.14163 10.739 4.26111 10.5 4.50007L5.46863 9.53144C5.29568 9.70439 5.2092 9.79087 5.14736 9.89179C5.09253 9.98126 5.05213 10.0788 5.02763 10.1808C5 10.2959 5 10.4182 5 10.6628V17.4001C5 17.9601 5 18.2401 5.10899 18.4541C5.20487 18.6422 5.35785 18.7952 5.54601 18.8911C5.75992 19.0001 6.03995 19.0001 6.6 19.0001Z"/>
        </svg>
    )
}
