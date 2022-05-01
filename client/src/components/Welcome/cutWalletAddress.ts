export const cutWalletAddress = (wallet?: string) => {
  if (wallet) {
    return `${wallet.slice(0, 7)}...${wallet.slice(wallet.length - 5)}`
  }
  return ''
}
