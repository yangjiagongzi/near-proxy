use near_proxy_lib::export_schema_sdl;
use std::fs::write;

fn main() -> std::io::Result<()> {
    let sdl = export_schema_sdl();
    write("./schema.graphql", sdl)?;
    println!("schema.graphql generated successfully!");
    Ok(())
}
