const { Snippet } = require("enquirer");

module.exports = async () => {
  const prompt = new Snippet({
    name: "textPrompt",
    message: "Please Fill Out the below form",
    
    required: true,
    fields: [
      {
        name: "textPrompt",
        validate(value, _, item) {
          if (item.name === "textPrompt" && value && value.length > 3) {
            return prompt.styles.danger(
              `Text Prompt Must Be Within 3 Characters`
            );
          }
          return true;
        },
      },
      {
        name: "Shape",
        validate(value, _, item) {
          if (
            item.name === "Shape" && value &&
            ["circle", "triangle", "square"].includes(value.toLowerCase())
          ) {
            return true;
          }
          return prompt.styles.danger(
            `Shape Must Either Be Circle, Triangle or Square`
          );
        },
      },
    ],
    template: `
        1.> Headline for Logo: \${textPrompt},
        2.> Color for Headline:  \${textPromptColor},
        3.> Shape for the Logo: \${Shape}
        4.> Color for Shape: \${ShapeColor}
      `,
  });

  return await prompt.run()
};
