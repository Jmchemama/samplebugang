/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { AstPath } from '../ast_path';
export class Text {
    constructor(value, sourceSpan) {
        this.value = value;
        this.sourceSpan = sourceSpan;
    }
    visit(visitor, context) { return visitor.visitText(this, context); }
}
export class Expansion {
    constructor(switchValue, type, cases, sourceSpan, switchValueSourceSpan) {
        this.switchValue = switchValue;
        this.type = type;
        this.cases = cases;
        this.sourceSpan = sourceSpan;
        this.switchValueSourceSpan = switchValueSourceSpan;
    }
    visit(visitor, context) { return visitor.visitExpansion(this, context); }
}
export class ExpansionCase {
    constructor(value, expression, sourceSpan, valueSourceSpan, expSourceSpan) {
        this.value = value;
        this.expression = expression;
        this.sourceSpan = sourceSpan;
        this.valueSourceSpan = valueSourceSpan;
        this.expSourceSpan = expSourceSpan;
    }
    visit(visitor, context) { return visitor.visitExpansionCase(this, context); }
}
export class Attribute {
    constructor(name, value, sourceSpan, valueSpan) {
        this.name = name;
        this.value = value;
        this.sourceSpan = sourceSpan;
        this.valueSpan = valueSpan;
    }
    visit(visitor, context) { return visitor.visitAttribute(this, context); }
}
export class Element {
    constructor(name, attrs, children, sourceSpan, startSourceSpan = null, endSourceSpan = null) {
        this.name = name;
        this.attrs = attrs;
        this.children = children;
        this.sourceSpan = sourceSpan;
        this.startSourceSpan = startSourceSpan;
        this.endSourceSpan = endSourceSpan;
    }
    visit(visitor, context) { return visitor.visitElement(this, context); }
}
export class Comment {
    constructor(value, sourceSpan) {
        this.value = value;
        this.sourceSpan = sourceSpan;
    }
    visit(visitor, context) { return visitor.visitComment(this, context); }
}
export function visitAll(visitor, nodes, context = null) {
    const result = [];
    const visit = visitor.visit ?
        (ast) => visitor.visit(ast, context) || ast.visit(visitor, context) :
        (ast) => ast.visit(visitor, context);
    nodes.forEach(ast => {
        const astResult = visit(ast);
        if (astResult) {
            result.push(astResult);
        }
    });
    return result;
}
export class RecursiveVisitor {
    constructor() { }
    visitElement(ast, context) {
        this.visitChildren(context, visit => {
            visit(ast.attrs);
            visit(ast.children);
        });
    }
    visitAttribute(ast, context) { }
    visitText(ast, context) { }
    visitComment(ast, context) { }
    visitExpansion(ast, context) {
        return this.visitChildren(context, visit => { visit(ast.cases); });
    }
    visitExpansionCase(ast, context) { }
    visitChildren(context, cb) {
        let results = [];
        let t = this;
        function visit(children) {
            if (children)
                results.push(visitAll(t, children, context));
        }
        cb(visit);
        return [].concat.apply([], results);
    }
}
function spanOf(ast) {
    const start = ast.sourceSpan.start.offset;
    let end = ast.sourceSpan.end.offset;
    if (ast instanceof Element) {
        if (ast.endSourceSpan) {
            end = ast.endSourceSpan.end.offset;
        }
        else if (ast.children && ast.children.length) {
            end = spanOf(ast.children[ast.children.length - 1]).end;
        }
    }
    return { start, end };
}
export function findNode(nodes, position) {
    const path = [];
    const visitor = new class extends RecursiveVisitor {
        visit(ast, context) {
            const span = spanOf(ast);
            if (span.start <= position && position < span.end) {
                path.push(ast);
            }
            else {
                // Returning a value here will result in the children being skipped.
                return true;
            }
        }
    };
    visitAll(visitor, nodes);
    return new AstPath(path, position);
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXN0LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vcGFja2FnZXMvY29tcGlsZXIvc3JjL21sX3BhcnNlci9hc3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7OztHQU1HO0FBRUgsT0FBTyxFQUFDLE9BQU8sRUFBQyxNQUFNLGFBQWEsQ0FBQztBQVFwQyxNQUFNLE9BQU8sSUFBSTtJQUNmLFlBQW1CLEtBQWEsRUFBUyxVQUEyQjtRQUFqRCxVQUFLLEdBQUwsS0FBSyxDQUFRO1FBQVMsZUFBVSxHQUFWLFVBQVUsQ0FBaUI7SUFBRyxDQUFDO0lBQ3hFLEtBQUssQ0FBQyxPQUFnQixFQUFFLE9BQVksSUFBUyxPQUFPLE9BQU8sQ0FBQyxTQUFTLENBQUMsSUFBSSxFQUFFLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQztDQUN4RjtBQUVELE1BQU0sT0FBTyxTQUFTO0lBQ3BCLFlBQ1csV0FBbUIsRUFBUyxJQUFZLEVBQVMsS0FBc0IsRUFDdkUsVUFBMkIsRUFBUyxxQkFBc0M7UUFEMUUsZ0JBQVcsR0FBWCxXQUFXLENBQVE7UUFBUyxTQUFJLEdBQUosSUFBSSxDQUFRO1FBQVMsVUFBSyxHQUFMLEtBQUssQ0FBaUI7UUFDdkUsZUFBVSxHQUFWLFVBQVUsQ0FBaUI7UUFBUywwQkFBcUIsR0FBckIscUJBQXFCLENBQWlCO0lBQUcsQ0FBQztJQUN6RixLQUFLLENBQUMsT0FBZ0IsRUFBRSxPQUFZLElBQVMsT0FBTyxPQUFPLENBQUMsY0FBYyxDQUFDLElBQUksRUFBRSxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUM7Q0FDN0Y7QUFFRCxNQUFNLE9BQU8sYUFBYTtJQUN4QixZQUNXLEtBQWEsRUFBUyxVQUFrQixFQUFTLFVBQTJCLEVBQzVFLGVBQWdDLEVBQVMsYUFBOEI7UUFEdkUsVUFBSyxHQUFMLEtBQUssQ0FBUTtRQUFTLGVBQVUsR0FBVixVQUFVLENBQVE7UUFBUyxlQUFVLEdBQVYsVUFBVSxDQUFpQjtR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QUcsR0FBRyxDQUFDLGFBQWEsQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDO1NBQ3BDO2FBQU0sSUFBSSxHQUFHLENBQUMsUUFBUSxJQUFJLEdBQUcsQ0FBQyxRQUFRLENBQUMsTUFBTSxFQUFFO1lBQzlDLEdBQUcsR0FBRyxNQUFNLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQztTQUN6RDtLQUNGO0lBQ0QsT0FBTyxFQUFDLEtBQUssRUFBRSxHQUFHLEVBQUMsQ0FBQztBQUN0QixDQUFDO0FBRUQsTUFBTSxVQUFVLFFBQVEsQ0FBQyxLQUFhLEVBQUUsUUFBZ0I7SUFDdEQsTUFBTSxJQUFJLEdBQVcsRUFBRSxDQUFDO0lBRXhCLE1BQU0sT0FBTyxHQUFHLElBQUksS0FBTSxTQUFRLGdCQUFnQjtRQUNoRCxLQUFLLENBQUMsR0FBUyxFQUFFLE9BQVk7WUFDM0IsTUFBTSxJQUFJLEdBQUcsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1lBQ3pCLElBQUksSUFBSSxDQUFDLEtBQUssSUFBSSxRQUFRLElBQUksUUFBUSxHQUFHLElBQUksQ0FBQyxHQUFHLEVBQUU7Z0JBQ2pELElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7YUFDaEI7aUJBQU07Z0JBQ0wsb0VBQW9FO2dCQUNwRSxPQUFPLElBQUksQ0FBQzthQUNiO1FBQ0gsQ0FBQztLQUNGLENBQUM7SUFFRixRQUFRLENBQUMsT0FBTyxFQUFFLEtBQUssQ0FBQyxDQUFDO0lBRXpCLE9BQU8sSUFBSSxPQUFPLENBQU8sSUFBSSxFQUFFLFFBQVEsQ0FBQyxDQUFDO0FBQzNDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgR29vZ2xlIEluYy4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2FuZ3VsYXIuaW8vbGljZW5zZVxuICovXG5cbmltcG9ydCB7QXN0UGF0aH0gZnJvbSAnLi4vYXN0X3BhdGgnO1xuaW1wb3J0IHtQYXJzZVNvdXJjZVNwYW59IGZyb20gJy4uL3BhcnNlX3V0aWwnO1xuXG5leHBvcnQgaW50ZXJmYWNlIE5vZGUge1xuICBzb3VyY2VTcGFuOiBQYXJzZVNvdXJjZVNwYW47XG4gIHZpc2l0KHZpc2l0b3I6IFZpc2l0b3IsIGNvbnRleHQ6IGFueSk6IGFueTtcbn1cblxuZXhwb3J0IGNsYXNzIFRleHQgaW1wbGVtZW50cyBOb2RlIHtcbiAgY29uc3RydWN0b3IocHVibGljIHZhbHVlOiBzdHJpbmcsIHB1YmxpYyBzb3VyY2VTcGFuOiBQYXJzZVNvdXJjZVNwYW4pIHt9XG4gIHZpc2l0KHZpc2l0b3I6IFZpc2l0b3IsIGNvbnRleHQ6IGFueSk6IGFueSB7IHJldHVybiB2aXNpdG9yLnZpc2l0VGV4dCh0aGlzLCBjb250ZXh0KTsgfVxufVxuXG5leHBvcnQgY2xhc3MgRXhwYW5zaW9uIGltcGxlbWVudHMgTm9kZSB7XG4gIGNvbnN0cnVjdG9yKFxuICAgICAgcHVibGljIHN3aXRjaFZhbHVlOiBzdHJpbmcsIHB1YmxpYyB0eXBlOiBzdHJpbmcsIHB1YmxpYyBjYXNlczogRXhwYW5zaW9uQ2FzZVtdLFxuICAgICAgcHVibGljIHNvdXJjZVNwYW46IFBhcnNlU291cmNlU3BhbiwgcHVibGljIHN3aXRjaFZhbHVlU291cmNlU3BhbjogUGFyc2VTb3VyY2VTcGFuKSB7fVxuICB2aXNpdCh2aXNpdG9yOiBWaXNpdG9yLCBjb250ZXh0OiBhbnkpOiBhbnkgeyByZXR1cm4gdmlzaXRvci52aXNpdEV4cGFuc2lvbih0aGlzLCBjb250ZXh0KTsgfVxufVxuXG5leHBvcnQgY2xhc3MgRXhwYW5zaW9uQ2FzZSBpbXBsZW1lbnRzIE5vZGUge1xuICBjb25zdHJ1Y3RvcihcbiAgICAgIHB1YmxpYyB2YWx1ZTogc3RyaW5nLCBwdWJsaWMgZXhwcmVzc2lvbjogTm9kZVtdLCBwdWJsaWMgc291cmNlU3BhbjogUGFyc2VTb3VyY2VTcGFuLFxuICAgICAgcHVibGljIHZhbHVlU291cmNlU3BhbjogUGFyc2VTb3VyY2VTcGFuLCBwdWJsaWMgZXhwU291cmNlU3BhbjogUGFyc2VTb3VyY2VTcGFuKSB7fVxuXG4gIHZpc2l0KHZpc2l0b3I6IFZpc2l0b3IsIGNvbnRleHQ6IGFueSk6IGFueSB7IHJldHVybiB2aXNpdG9yLnZpc2l0RXhwYW5zaW9uQ2FzZSh0aGlzLCBjb250ZXh0KTsgfVxufVxuXG5leHBvcnQgY2xhc3MgQXR0cmlidXRlIGltcGxlbWVudHMgTm9kZSB7XG4gIGNvbnN0cnVjdG9yKFxuICAgICAgcHVibGljIG5hbWU6IHN0cmluZywgcHVibGljIHZhbHVlOiBzdHJpbmcsIHB1YmxpYyBzb3VyY2VTcGFuOiBQYXJzZVNvdXJjZVNwYW4sXG4gICAgICBwdWJsaWMgdmFsdWVTcGFuPzogUGFyc2VTb3VyY2VTcGFuKSB7fVxuICB2aXNpdCh2aXNpdG9yOiBWaXNpdG9yLCBjb250ZXh0OiBhbnkpOiBhbnkgeyByZXR1cm4gdmlzaXRvci52aXNpdEF0dHJpYnV0ZSh0aGlzLCBjb250ZXh0KTsgfVxufVxuXG5leHBvcnQgY2xhc3MgRWxlbWVudCBpbXBsZW1lbnRzIE5vZGUge1xuICBjb25zdHJ1Y3RvcihcbiAgICAgIHB1YmxpYyBuYW1lOiBzdHJpbmcsIHB1YmxpYyBhdHRyczogQXR0cmlidXRlW10sIHB1YmxpYyBjaGlsZHJlbjogTm9kZVtdLFxuICAgICAgcHVibGljIHNvdXJjZVNwYW46IFBhcnNlU291cmNlU3BhbiwgcHVibGljIHN0YXJ0U291cmNlU3BhbjogUGFyc2VTb3VyY2VTcGFufG51bGwgPSBudWxsLFxuICAgICAgcHVibGljIGVuZFNvdXJjZVNwYW46IFBhcnNlU291cmNlU3BhbnxudWxsID0gbnVsbCkge31cbiAgdmlzaXQodmlzaXRvcjogVmlzaXRvciwgY29udGV4dDogYW55KTogYW55IHsgcmV0dXJuIHZpc2l0b3IudmlzaXRFbGVtZW50KHRoaXMsIGNvbnRleHQpOyB9XG59XG5cbmV4cG9ydCBjbGFzcyBDb21tZW50IGltcGxlbWVudHMgTm9kZSB7XG4gIGNvbnN0cnVjdG9yKHB1YmxpYyB2YWx1ZTogc3RyaW5nfG51bGwsIHB1YmxpYyBzb3VyY2VTcGFuOiBQYXJzZVNvdXJjZVNwYW4pIHt9XG4gIHZpc2l0KHZpc2l0b3I6IFZpc2l0b3IsIGNvbnRleHQ6IGFueSk6IGFueSB7IHJldHVybiB2aXNpdG9yLnZpc2l0Q29tbWVudCh0aGlzLCBjb250ZXh0KTsgfVxufVxuXG5leHBvcnQgaW50ZXJmYWNlIFZpc2l0b3Ige1xuICAvLyBSZXR1cm5pbmcgYSB0cnV0aHkgdmFsdWUgZnJvbSBgdmlzaXQoKWAgd2lsbCBwcmV2ZW50IGB2aXNpdEFsbCgpYCBmcm9tIHRoZSBjYWxsIHRvIHRoZSB0eXBlZFxuICAvLyBtZXRob2QgYW5kIHJlc3VsdCByZXR1cm5lZCB3aWxsIGJlY29tZSB0aGUgcmVzdWx0IGluY2x1ZGVkIGluIGB2aXNpdEFsbCgpYHMgcmVzdWx0IGFycmF5LlxuICB2aXNpdD8obm9kZTogTm9kZSwgY29udGV4dDogYW55KTogYW55O1xuXG4gIHZpc2l0RWxlbWVudChlbGVtZW50OiBFbGVtZW50LCBjb250ZXh0OiBhbnkpOiBhbnk7XG4gIHZpc2l0QXR0cmlidXRlKGF0dHJpYnV0ZTogQXR0cmlidXRlLCBjb250ZXh0OiBhbnkpOiBhbnk7XG4gIHZpc2l0VGV4dCh0ZXh0OiBUZXh0LCBjb250ZXh0OiBhbnkpOiBhbnk7XG4gIHZpc2l0Q29tbWVudChjb21tZW50OiBDb21tZW50LCBjb250ZXh0OiBhbnkpOiBhbnk7XG4gIHZpc2l0RXhwYW5zaW9uKGV4cGFuc2lvbjogRXhwYW5zaW9uLCBjb250ZXh0OiBhbnkpOiBhbnk7XG4gIHZpc2l0RXhwYW5zaW9uQ2FzZShleHBhbnNpb25DYXNlOiBFeHBhbnNpb25DYXNlLCBjb250ZXh0OiBhbnkpOiBhbnk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB2aXNpdEFsbCh2aXNpdG9yOiBWaXNpdG9yLCBub2RlczogTm9kZVtdLCBjb250ZXh0OiBhbnkgPSBudWxsKTogYW55W10ge1xuICBjb25zdCByZXN1bHQ6IGFueVtdID0gW107XG5cbiAgY29uc3QgdmlzaXQgPSB2aXNpdG9yLnZpc2l0ID9cbiAgICAgIChhc3Q6IE5vZGUpID0+IHZpc2l0b3IudmlzaXQgIShhc3QsIGNvbnRleHQpIHx8IGFzdC52aXNpdCh2aXNpdG9yLCBjb250ZXh0KSA6XG4gICAgICAoYXN0OiBOb2RlKSA9PiBhc3QudmlzaXQodmlzaXRvciwgY29udGV4dCk7XG4gIG5vZGVzLmZvckVhY2goYXN0ID0+IHtcbiAgICBjb25zdCBhc3RSZXN1bHQgPSB2aXNpdChhc3QpO1xuICAgIGlmIChhc3RSZXN1bHQpIHtcbiAgICAgIHJlc3VsdC5wdXNoKGFzdFJlc3VsdCk7XG4gICAgfVxuICB9KTtcbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZXhwb3J0IGNsYXNzIFJlY3Vyc2l2ZVZpc2l0b3IgaW1wbGVtZW50cyBWaXNpdG9yIHtcbiAgY29uc3RydWN0b3IoKSB7fVxuXG4gIHZpc2l0RWxlbWVudChhc3Q6IEVsZW1lbnQsIGNvbnRleHQ6IGFueSk6IGFueSB7XG4gICAgdGhpcy52aXNpdENoaWxkcmVuKGNvbnRleHQsIHZpc2l0ID0+IHtcbiAgICAgIHZpc2l0KGFzdC5hdHRycyk7XG4gICAgICB2aXNpdChhc3QuY2hpbGRyZW4pO1xuICAgIH0pO1xuICB9XG5cbiAgdmlzaXRBdHRyaWJ1dGUoYXN0OiBBdHRyaWJ1dGUsIGNvbnRleHQ6IGFueSk6IGFueSB7fVxuICB2aXNpdFRleHQoYXN0OiBUZXh0LCBjb250ZXh0OiBhbnkpOiBhbnkge31cbiAgdmlzaXRDb21tZW50KGFzdDogQ29tbWVudCwgY29udGV4dDogYW55KTogYW55IHt9XG5cbiAgdmlzaXRFeHBhbnNpb24oYXN0OiBFeHBhbnNpb24sIGNvbnRleHQ6IGFueSk6IGFueSB7XG4gICAgcmV0dXJuIHRoaXMudmlzaXRDaGlsZHJlbihjb250ZXh0LCB2aXNpdCA9PiB7IHZpc2l0KGFzdC5jYXNlcyk7IH0pO1xuICB9XG5cbiAgdmlzaXRFeHBhbnNpb25DYXNlKGFzdDogRXhwYW5zaW9uQ2FzZSwgY29udGV4dDogYW55KTogYW55IHt9XG5cbiAgcHJpdmF0ZSB2aXNpdENoaWxkcmVuPFQgZXh0ZW5kcyBOb2RlPihcbiAgICAgIGNvbnRleHQ6IGFueSwgY2I6ICh2aXNpdDogKDxWIGV4dGVuZHMgTm9kZT4oY2hpbGRyZW46IFZbXXx1bmRlZmluZWQpID0+IHZvaWQpKSA9PiB2b2lkKSB7XG4gICAgbGV0IHJlc3VsdHM6IGFueVtdW10gPSBbXTtcbiAgICBsZXQgdCA9IHRoaXM7XG4gICAgZnVuY3Rpb24gdmlzaXQ8VCBleHRlbmRzIE5vZGU+KGNoaWxkcmVuOiBUW10gfCB1bmRlZmluZWQpIHtcbiAgICAgIGlmIChjaGlsZHJlbikgcmVzdWx0cy5wdXNoKHZpc2l0QWxsKHQsIGNoaWxkcmVuLCBjb250ZXh0KSk7XG4gICAgfVxuICAgIGNiKHZpc2l0KTtcbiAgICByZXR1cm4gW10uY29uY2F0LmFwcGx5KFtdLCByZXN1bHRzKTtcbiAgfVxufVxuXG5leHBvcnQgdHlwZSBIdG1sQXN0UGF0aCA9IEFzdFBhdGg8Tm9kZT47XG5cbmZ1bmN0aW9uIHNwYW5PZihhc3Q6IE5vZGUpIHtcbiAgY29uc3Qgc3RhcnQgPSBhc3Quc291cmNlU3Bhbi5zdGFydC5vZmZzZXQ7XG4gIGxldCBlbmQgPSBhc3Quc291cmNlU3Bhbi5lbmQub2Zmc2V0O1xuICBpZiAoYXN0IGluc3RhbmNlb2YgRWxlbWVudCkge1xuICAgIGlmIChhc3QuZW5kU291cmNlU3Bhbikge1xuICAgICAgZW5kID0gYXN0LmVuZFNvdXJjZVNwYW4uZW5kLm9mZnNldDtcbiAgICB9IGVsc2UgaWYgKGFzdC5jaGlsZHJlbiAmJiBhc3QuY2hpbGRyZW4ubGVuZ3RoKSB7XG4gICAgICBlbmQgPSBzcGFuT2YoYXN0LmNoaWxkcmVuW2FzdC5jaGlsZHJlbi5sZW5ndGggLSAxXSkuZW5kO1xuICAgIH1cbiAgfVxuICByZXR1cm4ge3N0YXJ0LCBlbmR9O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZmluZE5vZGUobm9kZXM6IE5vZGVbXSwgcG9zaXRpb246IG51bWJlcik6IEh0bWxBc3RQYXRoIHtcbiAgY29uc3QgcGF0aDogTm9kZVtdID0gW107XG5cbiAgY29uc3QgdmlzaXRvciA9IG5ldyBjbGFzcyBleHRlbmRzIFJlY3Vyc2l2ZVZpc2l0b3Ige1xuICAgIHZpc2l0KGFzdDogTm9kZSwgY29udGV4dDogYW55KTogYW55IHtcbiAgICAgIGNvbnN0IHNwYW4gPSBzcGFuT2YoYXN0KTtcbiAgICAgIGlmIChzcGFuLnN0YXJ0IDw9IHBvc2l0aW9uICYmIHBvc2l0aW9uIDwgc3Bhbi5lbmQpIHtcbiAgICAgICAgcGF0aC5wdXNoKGFzdCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyBSZXR1cm5pbmcgYSB2YWx1ZSBoZXJlIHdpbGwgcmVzdWx0IGluIHRoZSBjaGlsZHJlbiBiZWluZyBza2lwcGVkLlxuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG4gIH07XG5cbiAgdmlzaXRBbGwodmlzaXRvciwgbm9kZXMpO1xuXG4gIHJldHVybiBuZXcgQXN0UGF0aDxOb2RlPihwYXRoLCBwb3NpdGlvbik7XG59Il19