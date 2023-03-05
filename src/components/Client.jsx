import React from 'react'
import { clients } from '../constants'
import styles from '../style'

const Client = () => {
  return (
    <section className={`${styles.flexCenter} my-4`}>
      <div className={`${styles.flexCenter} flex-wrap
      w-full`}>
        {clients.map((item) => (
          <div key={item.id} className={`flex-1 ${styles.flexCenter} 
          sm:min-w-[192px] min-w-[120px] feature-card`}>
            <img src={item.logo} alt={`logo ${item.id}`} 
            className='sm:w-[192px] w-[100px] object-contain' />
          </div>
        ))}

      </div>
    </section>
  )
}

export default Client