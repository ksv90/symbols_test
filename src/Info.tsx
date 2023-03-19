import {
  Block,
  Description,
  ImageInfoBlock,
  InfoContent,
  List,
  ListItem,
  PaylinesBlock,
  PayoutBlock,
  PaytableSection,
  RulesSection,
  WildSymbolBlock,
} from '@releaseband/rowan';
import { useTranslation } from 'react-i18next';

const payouts = [
  [
    {
      src: 'textures/symbols/emperor.png',
      payouts: [null, null, 20, 50, 300],
    },
    {
      src: 'textures/symbols/princess.png',
      payouts: [null, null, 10, 40, 200],
    },
    {
      src: 'textures/symbols/warrior.png',
      payouts: [null, null, 6, 30, 150],
    },
    {
      src: 'textures/symbols/old_man.png',
      payouts: [null, null, 5, 25, 125],
    },
  ],
  [
    {
      src: 'textures/symbols/royals1.png',
      payouts: [null, null, 4, 12, 80],
    },
    {
      src: 'textures/symbols/royals2.png',
      payouts: [null, null, 4, 12, 80],
    },
    {
      src: 'textures/symbols/royals3.png',
      payouts: [null, null, 3, 8, 50],
    },
    {
      src: 'textures/symbols/royals4.png',
      payouts: [null, null, 3, 8, 50],
    },
  ],
] as const;

export const Info = () => {
  const { t } = useTranslation();

  return (
    <InfoContent>
      <PaytableSection>
        <ImageInfoBlock title={t('rules.yin_yang.title')} src="textures/rules/yin_yang.png">
          <Description>{t('rules.yin_yang.description_1')}</Description>
        </ImageInfoBlock>

        <WildSymbolBlock src="textures/symbols/wild_unroll.png">
          <Description>{t('rules.wild.description_1')}</Description>
        </WildSymbolBlock>

        <ImageInfoBlock title={t('rules.free_spins.title')} src="textures/rules/mystery.png">
          <Description>{t('rules.free_spins.description_1')}</Description>
          <Description>{t('rules.free_spins.description_2')}</Description>
          <Description>{t('rules.free_spins.description_3')}</Description>
        </ImageInfoBlock>

        <ImageInfoBlock title={t('rules.re_spins.title')} src="textures/rules/moneys.png">
          <Description>{t('rules.re_spins.description_1')}</Description>
          <Description>{t('rules.re_spins.description_2')}</Description>
          <Description>{t('rules.re_spins.description_3')}</Description>
          <Description>{t('rules.re_spins.description_4')}</Description>
        </ImageInfoBlock>

        <PayoutBlock payouts={payouts} />

        <PaylinesBlock
          reels={5}
          rows={3}
          lines={[
            [1, 1, 1, 1, 1],
            [0, 0, 0, 0, 0],
            [2, 2, 2, 2, 2],
            [0, 1, 2, 1, 0],
            [2, 1, 0, 1, 2],
            [1, 0, 0, 0, 1],
            [1, 2, 2, 2, 1],
            [0, 0, 1, 2, 2],
            [2, 2, 1, 0, 0],
            [1, 2, 1, 0, 1],
            [1, 0, 1, 2, 1],
            [0, 1, 1, 1, 0],
            [2, 1, 1, 1, 2],
            [0, 1, 0, 1, 0],
            [2, 1, 2, 1, 2],
            [1, 1, 0, 1, 1],
            [1, 1, 2, 1, 1],
            [0, 0, 2, 0, 0],
            [2, 2, 0, 2, 2],
            [0, 2, 2, 2, 0],
            [2, 0, 0, 0, 2],
            [1, 2, 0, 2, 1],
            [1, 0, 2, 0, 1],
            [0, 2, 0, 2, 0],
            [2, 0, 2, 0, 2],
          ]}
        />

        {/* TODO: вынести описание линий в rowan */}
        <Block>
          <Description>{t('rules.paylines.description_1')}</Description>
          <Description>{t('rules.paylines.description_2')}</Description>
          <Description>{t('rules.paylines.description_3')}</Description>
          <Description>{t('rules.paylines.description_4')}</Description>
        </Block>
      </PaytableSection>

      <RulesSection>
        <Block title={t('rules.base.title')} titleAlign="left">
          <List>
            <ListItem>{t('rules.base.item_1')}</ListItem>
            <ListItem>{t('rules.base.item_2')}</ListItem>
            <ListItem>{t('rules.base.item_3')}</ListItem>
            <ListItem>{t('rules.base.item_4')}</ListItem>
            <ListItem>{t('rules.base.item_5')}</ListItem>
            <ListItem>{t('rules.base.item_6')}</ListItem>
            <ListItem>{t('rules.base.item_7')}</ListItem>
          </List>
        </Block>

        <Block title={t('rules.free_spins.title')} titleAlign="left">
          <List>
            <ListItem>{t('rules.free_spins.item_1')}</ListItem>
            <ListItem>{t('rules.free_spins.item_2')}</ListItem>
            <ListItem>{t('rules.free_spins.item_3')}</ListItem>
            <ListItem>{t('rules.free_spins.item_4')}</ListItem>
          </List>
        </Block>

        <Block title={t('rules.re_spins.title')} titleAlign="left">
          <List>
            <ListItem>{t('rules.re_spins.item_1')}</ListItem>
            <ListItem>{t('rules.re_spins.item_2')}</ListItem>
            <ListItem>{t('rules.re_spins.item_3')}</ListItem>
            <ListItem>{t('rules.re_spins.item_4')}</ListItem>
            <ListItem>{t('rules.re_spins.item_5')}</ListItem>
            <ListItem>{t('rules.re_spins.item_6')}</ListItem>
            <ListItem>{t('rules.re_spins.item_7')}</ListItem>
            <ListItem>{t('rules.re_spins.item_8')}</ListItem>
            <List>
              <ListItem>{t('rules.re_spins.item_8_subitem_1')}</ListItem>
              <ListItem>{t('rules.re_spins.item_8_subitem_2')}</ListItem>
            </List>
            <ListItem>{t('rules.re_spins.item_9')}</ListItem>
            <ListItem>{t('rules.re_spins.item_10')}</ListItem>
            <ListItem>{t('rules.re_spins.item_11')}</ListItem>
            <ListItem>{t('rules.re_spins.item_12')}</ListItem>
          </List>
        </Block>
      </RulesSection>
    </InfoContent>
  );
};
