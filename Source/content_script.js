walk(document.body);

function walk(node)
{

  var child, next;

  if ((node.tagName &&
      (node.tagName.toLowerCase() == 'input' || node.tagName.toLowerCase() == 'textarea'))
      || (node.classList && node.classList.contains('ace_editor'))) {
    return;
  }

  switch ( node.nodeType )
  {
    case 1:  // Element
    case 9:  // Document
    case 11: // Document fragment
      child = node.firstChild;
      while ( child )
      {
        next = child.nextSibling;
        walk(child);
        child = next;
      }
      break;

    case 3: // Text node
      handleText(node);
      break;
  }
}

function handleText(textNode)
{
  var v = textNode.nodeValue;

  v = v.replace(/\bThe Cloud\b/g, "My Butt");
  v = v.replace(/\bThe cloud\b/g, "My butt");
  v = v.replace(/\bthe Cloud\b/g, "my Butt");
  v = v.replace(/\bthe cloud\b/g, "my butt");

  textNode.nodeValue = v;
}


