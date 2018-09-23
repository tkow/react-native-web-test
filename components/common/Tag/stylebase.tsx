
const defaultScale = 1
const defaultTagSize = 32
const defaultFontSize = 22

const setTagHeight = defaultTagSize*defaultScale

export const TouchZone = {
  justifyContent: 'center',
  backgroundColor: '#e0e0e0',
  borderRadius: 16,
  paddingHorizontal: 12,
  height: setTagHeight,
  margin: 4,
}

export const TagText ={
  fontSize:  defaultScale*defaultFontSize,
  color: 'rgba(0, 0, 0, 0.87)'
}

export const TextInput = {
  margin: 0,
  padding: 0,  
  paddingHorizontal: 12,
  flex: 1,
  height: setTagHeight,
  fontSize: 13,
  color: 'rgba(0, 0, 0, 0.87)',
}

export const Container = {
  flexDirection: 'row',
  flexWrap: 'wrap',
  alignItems: 'center',
}

export const TextInputContainer = {
  flex: 1,
  width: 100,
  height: setTagHeight,
  margin: "4px",
  borderRadius: 16,
  backgroundColor: "#ccc",
}