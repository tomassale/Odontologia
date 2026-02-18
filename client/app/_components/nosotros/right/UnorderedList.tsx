export default function UnorderedList({item}: Readonly<{item: string[]}>) {
  return (
    <ul>
      {item.map((listItem, index) => (
        <ul key={index}>{listItem}</ul>
      ))}
    </ul>
  )
}