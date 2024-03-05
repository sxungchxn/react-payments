import { Flex } from '@/components/atom/flex'
import { Text } from '@/components/atom/text'
import * as styles from './card.css'
import { createDisplayCardCode } from '@/utils/create-display-card-code'
import { LayoutProps } from '@/types'

export interface CardProps extends LayoutProps {
  cardType?: string
  cardSize?: styles.Size
  cardCode: string
  cardName: string
  cardExpDate: string
}

export const Card = ({
  cardType,
  cardSize = 'md',
  cardCode,
  cardName,
  cardExpDate,
  ...layoutProps
}: CardProps) => {
  const displayCardName = cardName.length === 0 ? 'NAME' : cardName
  const displayCardExpDate = cardExpDate.length === 0 ? 'MM/YY' : cardExpDate
  const displayCardCode =
    cardCode.length === 0 ? '\n' : createDisplayCardCode({ value: cardCode, separator: ' ' })

  return (
    <Flex direction="column" className={styles.CardContainer({ size: cardSize })} {...layoutProps}>
      <Flex alignItems="center" className={styles.CardHeader({ size: cardSize })}>
        <Text variant="body3">{cardType}&nbsp;</Text>
      </Flex>
      <Flex
        className={styles.CardBody({ size: cardSize })}
        backgroundColor="gold"
        borderRadius="4px"
      />
      <Flex direction="column" className={styles.CardFooter({ size: cardSize })}>
        <Text>{displayCardCode}&nbsp;</Text>
        <Flex justifyContent="space-between" alignItems="center">
          <Text>{displayCardName}</Text>
          <Text>{displayCardExpDate}</Text>
        </Flex>
      </Flex>
    </Flex>
  )
}