type ItemProps = {
  content: string
  title: string
  separator: boolean
};

const PanelItem: React.FC<ItemProps> = ({ content, title, separator=false }) => {
  return (
    <>
      <article>
        <h5>{title}</h5>
        <p>{content}</p>
      </article>
      {separator && <div className="separation"/>}
    </>
  );
};

export default PanelItem;