function removeMarkdown(text: string): string {
    text = text
        .replace(/!\[([^\]]+)\]\(([^)]+)\)/g, "")
        .replace(/```(?:\w+)?([\s\S]+?)```/g, "")
        .replace(/(_|\*{1,2})(.*?)\1/g, "")
        .replace(/(\s{4}|\t)(.*)/g, "")
        .replace(/`([^`]+)`/g, "")
        .replace(/---/g, "")
        .replace(/^#+\s+/gm, "")
  
    return text
}

export { removeMarkdown }