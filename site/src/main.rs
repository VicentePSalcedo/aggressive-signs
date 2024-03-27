use yew::prelude::*;
use yew::{classes,html};
use stylist::yew::styled_component;

#[styled_component]
fn App() -> Html {
    html! {
        <>
            <h1 class={classes!("container")}>{ "Hello World" }</h1>
        </>
    }
}

fn main() {
    yew::Renderer::<App>::new().render();
}
