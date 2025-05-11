// EditModal.js
import React from 'react';
import './EditModal.css'; // Создадим файл для стилей

function EditModal({ isOpen, onClose, todo, editText, onEditTextChange, onSave }) {
    if (!isOpen || !todo) {
        return null; // Не рендерим, если не открыто или нет todo для редактирования
    }

    const handleSubmit = (e) => {
        e.preventDefault(); // Предотвращаем стандартное поведение формы
        onSave();
    };

    return (
        <div className="modal-overlay">
            <div className="modal-content">
                <h2>Редактировать задачу</h2>
                <form onSubmit={handleSubmit}>
                    <input
                    type="text"
                    value={editText}
                    onChange={onEditTextChange}
                    autoFocus // Автоматически фокусируемся на поле ввода
                    />
                    <div className="modal-actions">
                        <button type="submit">Сохранить</button>
                        <button type="button" onClick={onClose}>Отмена</button>
                    </div>
                </form>
                <button className="modal-close-button" onClick={onClose}>×</button>
            </div>
        </div>
    );
}

export default EditModal;
