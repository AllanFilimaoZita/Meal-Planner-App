
import { useEffect } from "react";
import { IoCloseOutline } from "react-icons/io5";
import RecipeForm from "./RecipeForm";

function RecipeModal({ onClose, onCreated, onUpdated, recipe = null }) {
    useEffect(() => {
        function handleKeyDown(event) {
            if (event.key === "Escape") {
                onClose();
            }
        }

        document.addEventListener("keydown", handleKeyDown);

        return () => {
            document.removeEventListener("keydown", handleKeyDown);
        };
    }, [onClose]);

    const isEditing = Boolean(recipe);

    return (
        <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4 backdrop-blur-sm"
            onMouseDown={(event) => {
                if (event.target === event.currentTarget) {
                    onClose();
                }
            }}
        >
            <section
                role="dialog"
                aria-modal="true"
                aria-labelledby="recipe-modal-title"
                className="max-h-[90vh] w-full max-w-xl overflow-y-auto rounded-2xl bg-white p-5 shadow-2xl sm:p-7"
            >
                <header className="mb-6 flex items-start justify-between gap-4">
                    <div>
                        <h2
                            id="recipe-modal-title"
                            className="text-2xl font-bold text-gray-900"
                        >
                            {isEditing ? "Editar receita" : "Nova receita"}
                        </h2>

                        <p className="mt-1 text-sm text-gray-500">
                            {isEditing
                                ? "Actualiza os dados desta receita."
                                : "Guarda uma nova receita no teu espaço."}
                        </p>
                    </div>

                    <button
                        type="button"
                        onClick={onClose}
                        aria-label="Fechar formulário"
                        className="rounded-full p-2 text-gray-500 transition hover:bg-gray-100 hover:text-gray-900"
                    >
                        <IoCloseOutline className="size-6" />
                    </button>
                </header>

                <RecipeForm
                    recipe={recipe}
                    onCreated={onCreated}
                    onUpdated={onUpdated}
                    onClose={onClose}
                />
            </section>
        </div>
    );
}

export default RecipeModal;
