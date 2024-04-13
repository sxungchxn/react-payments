import { CardState } from '@/types'
import { STORAGE_KEY } from './use-payments-step-machine'

/**
 * payments app에 저장된 카드리스트를 조회합니다
 */
export const usePaymentsCardList = () => {
  const storageValue = localStorage.getItem(STORAGE_KEY)
  const cardList = storageValue
    ? (JSON.parse(storageValue) as { context: { cardList: CardState[] } }).context.cardList
    : []

  return cardList
}
